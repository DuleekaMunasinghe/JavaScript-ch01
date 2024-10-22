var app = express();
var bcrypt = require("bcrypt");
var conn = require("./db");

//set up the view engine
app.set("view engine", "ejs");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rutes home
app.get("/", function (req, res) {
  res.render("home");
});

//routes to login
app.get("/login", function (req, res) {
  res.render("login");
});

//routes to register
app.get("/register", function (req, res) {
  res.render("register");
});

//Registration Process
app.post("/reg", function (request, response) {
  console.log("Register Request", request.body);

  //matching password
  if (request.body.password != request.body.confirmpassword) {
    console.log("Password not match");
  } else {
    console.log("Password match");

    // hash the password
    var hashedPassword = bcrypt.hashSync(request.password, 10);
    console.log("Hashed Password", hashedPassword);

    //TODO: Add to Database
    conn.query(
      "INSERT INTO users (username, password,  VALUES (?, ?)",
      [request.body.username, hashedPassword],
      function (error, results, fields) {
        if (error) throw error;
        console.log("User add to database");
        response.redirect("/login");
      }
    );
  }
});

app.listen(3000);
console.log("Server started on port 3000");


    <p>
        <label for="confirmpassword">Password</label>
        <input type="text" name="confirmpassword" placeholder="password" required>
    </p>

    <p>
        <label for="phonenumber">Phone Number</label>
        <input type="text" name="phonenumber" placeholder="phone number" required>
    </p>

    <p>
        <label for="email">Email</label>
        <input type="text" name="email" placeholder="email" required>
    </p>

    <p>
        <button type="submit">Create Account</button>
    </p>
</form>