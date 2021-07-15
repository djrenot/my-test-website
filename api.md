api:
VmRTHMq03MApH1n8OoYznDS4Q

api secret:
N1ZsQz9vYyN7H2gkMQdGtDaY2bqv5TWMqbGFCOO5uAgR5sgye0

access token:
1005653155487469568-SD4aW7uUY1da6VufuwwHnCKrucHyZh

access token secret:
mUoQwdethrZQNCk4mJ2BtuttwCfaNPNJd4yd4i6awBLxU


bearer token:
AAAAAAAAAAAAAAAAAAAAAJFdQgEAAAAAbcgEdZAvbDqNgbbCVZ%2BGHJcFJoQ%3Dc4Wis2U3krMu3iGlxtEnpMpIPq8fgzl5JLUErlqPEe5WCRu6E9


curl --request GET 'https://api.twitter.com/2/users/by/username/ensemble_stars' --header 'Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAJFdQgEAAAAAbcgEdZAvbDqNgbbCVZ%2BGHJcFJoQ%3Dc4Wis2U3krMu3iGlxtEnpMpIPq8fgzl5JLUErlqPEe5WCRu6E9'

curl --request GET 'https://api.twitter.com/2/users/2848709654/tweets' --header 'Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAJFdQgEAAAAAbcgEdZAvbDqNgbbCVZ%2BGHJcFJoQ%3Dc4Wis2U3krMu3iGlxtEnpMpIPq8fgzl5JLUErlqPEe5WCRu6E9'


curl --request GET 'https://api.twitter.com/2/tweets/search/all?query="【イベント情報】"%26"開始しました!"%26until:2020-03-30%26from:ensemble_stars' -H 'Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAJFdQgEAAAAAbcgEdZAvbDqNgbbCVZ%2BGHJcFJoQ%3Dc4Wis2U3krMu3iGlxtEnpMpIPq8fgzl5JLUErlqPEe5WCRu6E9'



curl --request POST \

  --url 'https://api.twitter.com/1.1/statuses/update.json?status=Hello%20world' \

  --header 'authorization: OAuth oauth_consumer_key="CONSUMER_API_KEY", oauth_nonce="OAUTH_NONCE", oauth_signature="OAUTH_SIGNATURE", oauth_signature_method="HMAC-SHA1", oauth_timestamp="OAUTH_TIMESTAMP", oauth_token="ACCESS_TOKEN", oauth_version="1.0"' \