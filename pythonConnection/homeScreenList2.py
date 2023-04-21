from bs4 import BeautifulSoup
import requests
import sys
import json

class AnimeList:
    def __init__(self, title, animeUrl, imgUrl):
        self.title = title
        self.animeUrl = animeUrl
        self.imgUrl = imgUrl

url="https://gogoanime.cl/new-season.html?page=2"
html = requests.get(url)
dataList=[]
soup = BeautifulSoup(html.text, 'html.parser')
data=soup.find('ul',{'class':'items'})
list=data.find_all('li')
for i in list:
    temp=(i.find('div',{'class':'img'}))
    title=temp.find('a')['title']
    animeUrl=temp.find('a')['href']
    imgUrl=temp.find('img')['src']
    dataList.append((title,animeUrl,imgUrl))

animeListData = []
for item in dataList:
    animeListData.append(AnimeList(item[0], item[1], item[2]))
# json conversion
json_data = json.dumps([obj.__dict__ for obj in animeListData])
sys.stdout.write(json_data)
