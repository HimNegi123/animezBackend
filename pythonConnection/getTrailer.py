import json
import sys
import googleapiclient.discovery

inputData = sys.stdin.readline().rstrip()
QUERY = inputData + " trailer"

youtube = googleapiclient.discovery.build("youtube", "v3", developerKey='AIzaSyDk266gRklRPp5qzudzCDFY9Xt-pJh5DN8')

search_response = youtube.search().list(
    q=QUERY,
    type='video',
    part='id',
    maxResults=1
).execute()

if 'items' in search_response and len(search_response['items']) > 0:
    video_id = search_response['items'][0]['id']['videoId']
    json_data = {"vidId": video_id}
    data = json.dumps(json_data)
    sys.stdout.write(data)
else:
    sys.stdout.write('{"error": "No videos found"}')

 

 #AIzaSyDk266gRklRPp5qzudzCDFY9Xt-pJh5DN8