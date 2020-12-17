// http://json-schema.org/learn/getting-started-step-by-step.html

const schema = {
  "type": "object",
  "properties": {
    "accessToken": {
      "description": "Token",
      "type": "string"
    },
    "url": {
      "description": "URL",
      "type": "string"
    },
    "port": {
      "description": "Port",
      "type": "number"
    }
  },
  "required": [ "token" ]
}

module.exports = schema
