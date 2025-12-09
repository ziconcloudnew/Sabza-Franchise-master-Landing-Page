from flask import Flask
from flask_cors import CORS
from db import init_db
from routes import contact_bp


def print_debug_info(app):
    print("\n📌 Registered Blueprints:")
    for name, blueprint in app.blueprints.items():
        print(f"  - {name} -> url_prefix={blueprint.url_prefix}")

    print("\n📌 Registered Routes:")
    for rule in app.url_map.iter_rules():
        methods = ",".join(sorted(rule.methods))
        print(f"  {rule.rule} [{methods}] -> {rule.endpoint}")
    print("\n" + "-"*50 + "\n")


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "http://localhost:3001","http://localhost:5174", "http://localhost:5175", "http://localhost:5176","http://localhost:5177"  ]}}, methods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'])  # for frontend


# MongoDB
init_db(app)


# Register Blueprints
app.register_blueprint(contact_bp)

print_debug_info(app)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)


