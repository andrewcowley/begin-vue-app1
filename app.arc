@app
begin-app

@static
folder dist

@http
get /api
post /pulse
get /pulse

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
