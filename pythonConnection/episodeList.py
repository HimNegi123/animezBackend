from bs4 import BeautifulSoup
import requests
import sys
import json

class AnimeList:
    def __init__(self,url):
        self.url=url

# Read the query string from standard input
inputData = sys.stdin.readline().rstrip()
url = "https://gogoanime.cl"+inputData
html = requests.get(url)
soup = BeautifulSoup(html.text, 'html.parser')

data = soup.find('div',{'class':'anime_info_body'})
getImage = data.find('img')['src']
getTitle = data.find('h1').text
getType = data.find_all('p', {'class': 'type'})[0].find('a').text   
plotSummary = data.find_all('p', {'class': 'type'})[1].text.strip().replace('Plot Summary:','') 
getdiffName = data.find_all('p', {'class': 'type'})[5].text.strip().replace('Other name:','')  

getAllEpisodesRange = soup.find('div',{'class':'anime_video_body'}).find('ul',{'id':'episode_page'}).find_all('a')
episode_ranges = [(link['ep_start'], link['ep_end']) for link in getAllEpisodesRange]

getAllEpisodesUrl = []
for episode_range in episode_ranges:
    for i in range(int(episode_range[0]), int(episode_range[1])+1):
        getAllEpisodesUrl.append(AnimeList("https://gogoanime.gr/"+inputData+"-episode-"+str(i)))


createNameUrl=inputData.replace("/category/","",1)
getDataList=[]
listLength=len(getAllEpisodesUrl)
for i in range(listLength):
    getDataList.append({"url":"https://gogoanime.cl/"+createNameUrl+"-episode-"+str(i+1)})
getDataList.pop();    
json_episode = json.dumps(getDataList)
json_data = {
    "getImage": getImage,
    "getTitle": getTitle,
    "getType": getType,
    "plotSummary": plotSummary,
    "getdiffName": getdiffName,
    "episodes": json_episode,
}

# write JSON string to standard output
sys.stdout.write(json.dumps(json_data))
