import requests
from random import uniform
from datetime import datetime
from json import dumps

geocodingAPIKey = "AIzaSyDjiaxrpcPnkoVrWCEylpUVEZ5EmvfYr9o"

lat = uniform(-90, 90)
lng = uniform(-180, 180)

location_type = "ROOFTOP"
result_type = "street_address"

endpoint = "https://maps.googleapis.com/maps/api/geocode/json?latlng={},{}&location_type={}&result_type={}&key={}".format(lat, lng, location_type, result_type, geocodingAPIKey)
response = requests.get(endpoint)
print "LAT {}".format(str(lat))
print "LONG {}".format(str(lng))
print response.json()

# Analyze the output for good addresses
# data = response.json()
# if data is not None and len(data.get("results", [])) > 0:
#    for place in data.get("results"):
#        print place.get("types")

# Logging the output to files.
# file_name = './outputs/{}.txt'.format(str(datetime.now()))
# new_file = open(file_name, 'a+')
# new_file.write(dumps(response.json()))
