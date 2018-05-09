import tweepy
import pymongo
import datetime
#https://www.quora.com/How-can-I-retrieve-from-given-users-home_timeline-with-Tweepy

# Twitter API credentials

consumer_key=""
consumer_secret=""
access_token=""
access_token_secret=""

#create database connection
client = pymongo.MongoClient("")
db = client.test
collection = db.users

for obj in collection.find():
    #print obj['twitter']['username']

    specific_user = obj['twitter']['username']
    print ("specific_user = " + str(specific_user))

#define collection
db = client.TestTweets
collection = db.UserTweets

#this variable will have to change with each user
#specific_user = 'senior_design_t'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)

auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

info = api.user_timeline(screen_name = specific_user, count = 100, include_rts = False)

for status in info:
    #remove later, just for checking in the terminal
    print(status.text)

    # Pull important info from the tweet to store in the database.
    tweet_id = status.id  # The Tweet ID from Twitter in string format
    username = status.user.screen_name  # The username of the Tweet author
    text = status.text  # The entire body of the Tweet
    date_time = status.created_at  # The timestamp of when the Tweet was created
    coordinates = status.coordinates #long, lat
    #entities = status.extended_entities
    entities = status.entities

    # Load all of the extracted Tweet data into the variable "tweet" that will be stored into the database
    tweet = {'username':username,'tweet_id':tweet_id,'text':text,'date_time':date_time, 'coordinates':coordinates, 'entities':entities}

    print(tweet)
    collection.insert_one(tweet)
    #return True

