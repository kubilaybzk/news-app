import mongoose from "mongoose";

// windows is available in browser
// like windows we have global variable in node env

global.mongoose = {
  conn: null,
  promise: null,
};

export async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("Daha önce ayarlanmış db bağlantısı kullanıldı.");
    return global.mongoose.conn;
  } else {
    console.log("Yeni DB bağlantısı oluşturuldu.");

    const conString = `mongodb+srv://xxxxx-users:xxxxx-users@cluster0.e2b4euo.mongodb.net/xxxxx?retryWrites=true&w=majority`;

    const promise = mongoose
      .connect(conString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
      })
      .then((mongoose) => mongoose);

    global.mongoose = {
      conn: await promise,
      promise,
    };

    return await promise;
  }
}
