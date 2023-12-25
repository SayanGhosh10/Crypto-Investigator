from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Coins import dogecoin,bitcoin,ether,tether,monero,dash

app = FastAPI()

# Allow all origins for development (update as needed in production)
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# key = "0xce0babc8398144aa98d9210d595e3a9714910748" #valid ether
# key = "DBKsPhXJ2A4cK8Z8F8nFbkVpeskYLoNNTk" #valid dogecoin
# key = "XcFLaufF75pyRbAZxgT7A1Vu7GG1qhzDvK" #valid dash
# key = "3EQ8FhqRR2H4Ffd2JsoT8R899B2omscgcX" #valid bitcoin
# key = "42178c98d177441aa0553f88b1107ffa8a59f74a70e74dc604746e36a39276f4"

@app.post("/process_input")
def process_input(input_data: dict):
    # Access the input_data using the correct key
    input_text = input_data.get("input_data", "")
    if bitcoin.is_valid_bitcoin_address(input_text):
        processed_data = "Valid Bitcoin"
    elif ether.is_valid_ethereum_address(input_text):
        processed_data = "Valid Ethereum"
    elif tether.is_valid_tether_address(input_text):
        processed_data = "Valid Tether"
    elif monero.is_valid_monero_address(input_text):
        processed_data = "Valid Monero"
    elif dash.is_valid_dash_address(input_text):
        processed_data = "Valid Dash"
    elif dogecoin.is_valid_dogecoin_address(input_text):
        processed_data = "Valid Dogecoin"
    else:
        processed_data = "Not a valid currency"
    # processed_data = input_text.upper()
    return {"processed_data": processed_data}
