from logging import DEBUG
from typing import List
from flask import Flask,json,request
from flask_cors.core import ACL_ALLOW_HEADERS 
from flask_cors import CORS ,cross_origin
import numpy as np
from flask_sqlalchemy  import SQLAlchemy 
import jsonify
import pickle
from flask_cors import CORS ,cross_origin
from sklearn.preprocessing import StandardScaler
from werkzeug.utils import send_from_directory

# config
app = Flask(__name__ ,static_folder="car_prc_model/build", static_url_path="")
CORS(app)
model = pickle.load(open('random_forest_regression_model.pkl', 'rb'))

# api
@app.route("/data",methods=["GET"]  )
def data():
 return  {
   "data":
   "nithii"
 }

standard_to = StandardScaler()
@app.route("/api/create" ,methods=["POST"])
@cross_origin()
def apiresult():
          if(request.method =='POST'):
              result = ""
              Fuel_Type_Diesel=0
              request_data = json.loads(request.data)
              Present_Price= float( request_data["price"])
              km_int= int(request_data["km"])
              Kms_Driven2 =np.log( km_int)
              owner =int(request_data["owner"])
              year = int( request_data["Year"])
              Fuel_Type_Petrol= str(request_data["ftype"])
              Seller_Type_Individual = str( request_data["di"])
              Transmission_Mannual = str(request_data["tm"]) 

              if(Fuel_Type_Petrol=='Petrol'):
                Fuel_Type_Petrol=1
                Fuel_Type_Diesel=0
              else:
                Fuel_Type_Petrol=0
                Fuel_Type_Diesel=1
              year=2020-year
              if(Seller_Type_Individual=='Individual'):
                Seller_Type_Individual=1
              else:
                Seller_Type_Individual=0	

              if(Transmission_Mannual=='Mannual'):
                Transmission_Mannual=1
              else:
                Transmission_Mannual=0
              prediction=model.predict([[Present_Price,Kms_Driven2,owner,year,Fuel_Type_Diesel,Fuel_Type_Petrol,Seller_Type_Individual,Transmission_Mannual]])
              output=round(prediction[0],2)
              if output<0:
                  print("you cant sell this car")
                  return "output"
              else:
                  result = str(output)
                  print(result)
                  return result
          else :
               return "done"
@app.route("/")
@cross_origin()
def serve() :
  return send_from_directory(app.static_folder,"index.html")               
if __name__=="__main__":
    app.run(debug=True)