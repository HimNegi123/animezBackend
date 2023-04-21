import sys
import requests
from bs4 import BeautifulSoup
import json

inputData = sys.stdin.readline().rstrip()
url = inputData # replace with the actual URL
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
iframe = soup.find('iframe')
src = iframe['src']
data = {"src": src}

json_data = json.dumps(data)
sys.stdout.write(json_data)

#https://gogoanime.cl/naruto-episode-220