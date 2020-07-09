@app
begin-app

@static
folder dist

@http
get /api
post /inc
post /pulse
get /pulse

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
