from flask import request, jsonify
from datetime import datetime
from db import mongo

from werkzeug.security import generate_password_hash, check_password_hash


def save_sabza_fran_contact():
    try:
        data = request.get_json()

        form_data = data.get("formData", {})
        lead = data.get("lead")
        source= data.get("source")


        name = form_data.get("name")
        email = form_data.get("email")
        company = form_data.get("company")
        message = form_data.get("message")

        org=data.get("org")
        if not name or not email or not message:
            return jsonify({"success": False, "error": "Missing required fields"}), 400

        # Insert into MongoDB
        mongo.db.leads.insert_one({
            "name": name,
            "email": email,
            "company": company,
            "message": message,
            "lead": lead,
            "org":org,
            "source" : source,
            "createdAt": datetime.utcnow()
        })

        return jsonify({"success": True, "message": "Lead saved successfully"})
    except Exception as e:
        print("Error:", e)
        return jsonify({"success": False, "error": "Server error"}), 500


def save_eco_contact():
    try:
        data = request.get_json()

        form_data = data.get("formData", {})
        lead = data.get("lead")
        source= data.get("source")

        name = form_data.get("name")
        email = form_data.get("email")
        company = form_data.get("company")
        service = form_data.get("service")
        message = form_data.get("message")
        org=data.get("org")
        if not name or not email or not message:
            return jsonify({"success": False, "error": "Missing required fields"}), 400
        
        # Insert into MongoDB
        mongo.db.leads.insert_one({
            "name": name,
            "email": email,
            "company": company,
            "message": message,
            "service": service,
            "lead": lead,
            "org": org,
            "source": source,
            "createdAt": datetime.utcnow()
        })

        return jsonify({"success": True, "message": "Lead saved successfully"})
    except Exception as e:
        print("Error:", e)
        return jsonify({"success": False, "error": "Server error"}), 500


def save_swap_contact():
    try:
        data = request.get_json()

        form_data = data.get("formData", {})
        lead = data.get("lead")
        source = data.get("source")

        name = form_data.get("name")
        email = form_data.get("email")
        message = form_data.get("message")
        date = form_data.get("date")
        time = form_data.get("time")
        phone = form_data.get("phone")
        org=data.get("org")
        
        if not name or not email or not message:
            return jsonify({"success": False, "error": "Missing required fields"}), 400

        # Insert into MongoDB
        mongo.db.leads.insert_one({
            "name": name,
            "email": email,
            "phone": phone,
            "date": date,
            "time": time,
            "message": message,
            "lead": lead,
            "org": org,
            "source": source,
            "createdAt": datetime.utcnow()
        })
        return jsonify({"success": True, "message": "Lead saved successfully"})
    except Exception as e:
        print("Error:", e)
        return jsonify({"success": False, "error": "Server error"}), 500


def save_enterprise_contact():
    try:
        data = request.get_json()

        form_data = data.get("formData")
        lead = data.get("lead")
        source= data.get("source")
        org= data.get("org")
        email = form_data.get("email")
        password=form_data.get("password")
        hashed_password = generate_password_hash(password)

        if not email:
            return jsonify({"success": False, "error": "Missing required fields"}), 400
        
        # Insert into MongoDB
        mongo.db.leads.insert_one({
            "email": email,
            "password": hashed_password,
            "lead": lead,
            "source": source,
            "org": org,
            "createdAt": datetime.utcnow()
        })

        return jsonify({"success": True, "message": "Lead saved successfully"})
    except Exception as e:
        print("Error:", e)
        return jsonify({"success": False, "error": "Server error"}), 500




def save_demo_contact():
    try:
        data = request.get_json()

        form_data = data.get("formData", {})
        lead = data.get("lead")
        source= data.get("source")
        org=data.get("org")

        email = form_data.get("email")

        if not email:
            return jsonify({"success": False, "error": "Missing required fields"}), 400
        
        # Insert into MongoDB
        mongo.db.leads.insert_one({
            "email": email,
            "lead": lead,
            "org": org,
            "source": source,
            "createdAt": datetime.utcnow()
        })

        return jsonify({"success": True, "message": "Lead saved successfully"})
    except Exception as e:
        print("Error:", e)
        return jsonify({"success": False, "error": "Server error"}), 500


