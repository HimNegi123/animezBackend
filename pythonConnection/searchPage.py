from bs4 import BeautifulSoup
import requests
import sys
import json

class AnimeList:
    def __init__(self, title, animeUrl, imgUrl):
        self.title = title
        self.animeUrl = animeUrl
        self.imgUrl = imgUrl

# Read the query string from standard input
data = sys.stdin.readline().rstrip()

url = "https://gogoanime.cl/search.html?keyword=" + str(data)
html = requests.get(url)
soup = BeautifulSoup(html.text, 'html.parser')
data = soup.find('ul', {'class': 'items'})
dataFile = data.find_all('a')
dataurl = data.find_all('img')
save = []
for x, y in zip(dataFile, dataurl):
    save.append((x['title'], x['href'], y['src']))

animeListData = []
for item in save:
    animeListData.append(AnimeList(item[0], item[1], item[2]))
# json convertion
json_data = json.dumps([obj.__dict__ for obj in animeListData])
sys.stdout.write(json_data)

   
    




