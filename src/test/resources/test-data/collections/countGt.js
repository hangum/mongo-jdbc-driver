// before
db.col.insertOne({name: "value1", v: 1});
db.col.insertOne({name: "value2", v: 2});
db.col.insertOne({name: "value2", v: 3});
// command
db.col.count({v: {$gt: 1}});
// clear
db.col.drop();