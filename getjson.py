import urllib2
import json
import pico

response = urllib2.urlopen('http://kaffe.abakus.no/api/status')
data = json.load(response)   

def get_obj():
	return data.get('coffee')

print data.get('coffee')