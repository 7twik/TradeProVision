from flask import Flask, jsonify 
from flask import request
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

import yfinance as yf
from flask_cors import CORS, cross_origin
import pandas as pd
from yahoo_fin import stock_info as si

app = Flask(__name__)
CORS(app, support_credentials=True)
@app.route('/api/ml')
@cross_origin(supports_credentials=True)
def predict():
    # Load the iris dataset
    iris = datasets.load_iris()
    X = iris.data  # Features
    y = iris.target  # Target variable
    # sp500_symbols = pd.DataFrame(si.tickers_sp500(), columns=['Symbol'])
    # nasdaq_symbols = pd.DataFrame(si.tickers_nasdaq(), columns=['Symbol'])
    # dow_symbols = pd.DataFrame(si.tickers_dow(), columns=['Symbol'])
    # other_symbols = pd.DataFrame(si.tickers_other(), columns=['Symbol'])
    # all_symbols = pd.concat([sp500_symbols, nasdaq_symbols, dow_symbols, other_symbols], ignore_index=True)
    
    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Create a K-Nearest Neighbors classifier
    knn = KNeighborsClassifier(n_neighbors=3)

    # Train the classifier
    knn.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred = knn.predict(X_test)

    # Print the accuracy of the model
    accuracy = knn.score(X_test, y_test)

    return{'accuracy': accuracy}

@app.route('/api/ml2', methods=['GET'])
@cross_origin(supports_credentials=True)
def predict2():
    args = request.args
    print(args.get("name"))
    name = args.get("name")
    print(args.get("month"))
    month = args.get("month")
    monthstr=month+"mo"
    print(monthstr)
    msft = yf.Ticker(name)

    # get all stock info
    msft.info

    # get historical market data
    hist = msft.history(period=monthstr)
    # print(hist)
    hist_reset_index = hist.reset_index()
    list_of_dicts = hist_reset_index.to_dict(orient='records')
    print(msft.info);
    # Now, list_of_dicts contains the data in the format you want
    #print(list_of_dicts)
    return jsonify(accuracy=10, symbols=name,  mimetype='application/json', data=list_of_dicts)

@app.route('/api/ml23', methods=['GET'])
@cross_origin(supports_credentials=True)
def predict23():
    args = request.args
    print(args.get("name"))
    name = args.get("name")
    msft = yf.Ticker(name)

    # get all stock info
    msft.info

    # get historical market data
    hist = msft.history(period="31mo")
    # print(hist)
    hist_reset_index = hist.reset_index()
    list_of_dicts = hist_reset_index.to_dict(orient='records')
    print(msft.info);
    # Now, list_of_dicts contains the data in the format you want
    #print(list_of_dicts)
    return jsonify(accuracy=10, symbols=name,  mimetype='application/json', data=list_of_dicts)