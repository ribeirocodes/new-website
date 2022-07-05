const password = 'cupuacu';

export default function login(req, res) {
  const { informedPassword } = JSON.parse(req.body);

  if (informedPassword === password) {
    return res.status(200).send();
  }

  return res.status(401).send()
}