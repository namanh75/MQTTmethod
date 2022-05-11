const mqtt =require("mqtt")
const client = mqtt.connect("mqtt://broker.hivemq.com:1883")

client.on('connect', function () {
  client.subscribe('SimpleMQTT')
  console.log("Client has subcribed successfully");
})

client.on('message', function (topic, message) {
  console.log(topic +" : "+ message)
})