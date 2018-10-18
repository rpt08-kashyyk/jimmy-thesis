function mergeComments(raw) {
  for (var i = 0; i < raw.length; i++) {
    raw[i].comments.push({
      username: raw[i].first_name[0],
      date: raw[i].date[0],
      comment: raw[i].comment[0]
    });
    raw[i].comments.push({
      username: raw[i].first_name[1],
      date: raw[i].date[1],
      comment: raw[i].comment[1]
    });
    raw[i].comments.push({
      username: raw[i].first_name[2],
      date: raw[i].date[2],
      comment: raw[i].comment[2]
    });
    raw[i].comments.push({
      username: raw[i].first_name[3],
      date: raw[i].date[3],
      comment: raw[i].comment[3]
    });
    raw[i].comments.push({
      username: raw[i].first_name[4],
      date: raw[i].date[4],
      comment: raw[i].comment[4]
    });

  }
}

function clean(raw) {
  for (var i = 0; i < raw.length; i++) {
    delete raw[i].date;
    delete raw[i].comment;
    delete raw[i].first_name;
    delete raw[i].value;
    delete raw[i].checkin;
    delete raw[i].accuracy;
    delete raw[i].communication;
    delete raw[i].location;
    delete raw[i].cleanliness;
  }
}

function mergeReviews(raw) {
  for (var i = 0; i < raw.length; i++) {
    raw[i].ratings.push({
      accuracy: raw[i].accuracy[0],
      communication: raw[i].communication[0],
      cleanliness: raw[i].cleanliness[0],
      location: raw[i].location[0],
      checkin: raw[i].checkin[0],
      value: raw[i].value[0]
    })
        raw[i].ratings.push({
      accuracy: raw[i].accuracy[1],
      communication: raw[i].communication[1],
      cleanliness: raw[i].cleanliness[1],
      location: raw[i].location[1],
      checkin: raw[i].checkin[1],
      value: raw[i].value[1]
    })
        raw[i].ratings.push({
      accuracy: raw[i].accuracy[2],
      communication: raw[i].communication[2],
      cleanliness: raw[i].cleanliness[2],
      location: raw[i].location[2],
      checkin: raw[i].checkin[2],
      value: raw[i].value[2]
    })
        raw[i].ratings.push({
      accuracy: raw[i].accuracy[3],
      communication: raw[i].communication[3],
      cleanliness: raw[i].cleanliness[3],
      location: raw[i].location[3],
      checkin: raw[i].checkin[3],
      value: raw[i].value[3]
    })
        raw[i].ratings.push({
      accuracy: raw[i].accuracy[4],
      communication: raw[i].communication[4],
      cleanliness: raw[i].cleanliness[4],
      location: raw[i].location[4],
      checkin: raw[i].checkin[4],
      value: raw[i].value[4]
    })
        raw[i].ratings.push({
      accuracy: raw[i].accuracy[5],
      communication: raw[i].communication[5],
      cleanliness: raw[i].cleanliness[5],
      location: raw[i].location[5],
      checkin: raw[i].checkin[5],
      value: raw[i].value[5]
    })
        raw[i].ratings.push({
      accuracy: raw[i].accuracy[6],
      communication: raw[i].communication[6],
      cleanliness: raw[i].cleanliness[6],
      location: raw[i].location[6],
      checkin: raw[i].checkin[6],
      value: raw[i].value[6]
    })
        raw[i].ratings.push({
      accuracy: raw[i].accuracy[7],
      communication: raw[i].communication[7],
      cleanliness: raw[i].cleanliness[7],
      location: raw[i].location[7],
      checkin: raw[i].checkin[7],
      value: raw[i].value[7]
    })
        raw[i].ratings.push({
      accuracy: raw[i].accuracy[8],
      communication: raw[i].communication[8],
      cleanliness: raw[i].cleanliness[8],
      location: raw[i].location[8],
      checkin: raw[i].checkin[8],
      value: raw[i].value[8]
    })
        raw[i].ratings.push({
      accuracy: raw[i].accuracy[9],
      communication: raw[i].communication[9],
      cleanliness: raw[i].cleanliness[9],
      location: raw[i].location[9],
      checkin: raw[i].checkin[9],
      value: raw[i].value[9]
    })
  }
}

function makeTotal(raw) {
  for (var i = 0; i < raw.length; i++) {
    raw[i].totalReviews = raw[i].ratings.length;
  }
}

function calcAvg(raw) {
  for (var i = 0; i < raw.length; i++) {
    raw[i].accuracy = 0;
    raw[i].communication = 0;
    raw[i].cleanliness = 0;
    raw[i].location = 0;
    raw[i].checkin = 0;
    raw[i].value = 0;
  }
}

function test(raw) {
var data = [];
  for (var i = 0; i < raw.length; i++) {
    for (var j = 0; j < raw[i].ratings.length; j++) {
      data.push(Object.values(raw[i].ratings[j]));
      console.log(data);
      // console.log(raw[i].ratings[j]);
    }
    // console.log(raw[0].ratings[i])
  }
}

function addSum(raw) {
  for (var i = 0; i < raw.length; i++) {
    for (var j = 0; j < raw[i].ratings.length; j++) {
      raw[i].accuracy += raw[i].ratings[j].accuracy;
      raw[i].communication += raw[i].ratings[j].communication;
      raw[i].cleanliness += raw[i].ratings[j].cleanliness;
      raw[i].location += raw[i].ratings[j].location;
      raw[i].checkin += raw[i].ratings[j].checkin;
      raw[i].value += raw[i].ratings[j].value;
    }
  }
}

function test(raw) {
  for (var i = 0; i < raw.length; i++) {
    for (var j = 0; j < raw[i].ratings.length; j++) {
      raw[i].accuracy = Math.ceil((raw[i].accuracy / raw[i].ratings.length)/5) * 5;
      raw[i].communication = Math.ceil((raw[i].communication / raw[i].ratings.length)/5) * 5;
      raw[i].cleanliness = Math.ceil((raw[i].cleanliness / raw[i].ratings.length)/5) * 5;
      raw[i].location = Math.ceil((raw[i].location / raw[i].ratings.length)/5) * 5;
      raw[i].checkin = Math.ceil((raw[i].checkin / raw[i].ratings.length)/5) * 5;
      raw[i].value = Math.ceil((raw[i].value / raw[i].ratings.length)/5) * 5;
    }
  }
}


