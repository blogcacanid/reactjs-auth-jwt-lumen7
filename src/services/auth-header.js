export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // For Lumen 7 back-end
    return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    // return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
