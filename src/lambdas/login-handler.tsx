import { Hono } from "hono";
import { handle } from 'hono/aws-lambda'
import LoginPage from "../pages/login-page";

const app = new Hono();

// ログインフォームを表示するルート
app.get("/", (c) => c.html(<LoginPage />));

// ログイン処理を行うルート
app.post("/login", async (c) => {
  const body = await c.req.parseBody();
  const { username, password } = body;
  // ここで認証処理を実装
  // この例では、単純にユーザー名とパスワードを返すだけ
  return c.json({ username, password });
});

export const handler = handle(app);