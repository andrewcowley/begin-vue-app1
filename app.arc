@app
begin-app

@static
folder dist

@http
get /api
get /inc
post /inc

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
