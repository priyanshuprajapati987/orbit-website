import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "orbit.db");

let db: Database.Database;

function getDb(): Database.Database {
  if (!db) {
    // Ensure data directory exists
    const fs = require("fs");
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    db = new Database(dbPath);

    // Enable WAL mode for better performance
    db.pragma("journal_mode = WAL");

    // Create tables
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS preorders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insert default admin if not exists
    const admin = db.prepare("SELECT id FROM users WHERE email = ?").get("priyanshuprajapati2693@gmail.com");
    if (!admin) {
      db.prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)").run(
        "Priyanshu",
        "priyanshuprajapati2693@gmail.com",
        "ORBIT@Admin2026"
      );
    }
  }

  return db;
}

export default getDb;
