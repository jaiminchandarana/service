from flask import Flask, request, jsonify
import yagmail, os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()
app_password = os.getenv("APP_PASSWORD")

app = Flask(__name__)

CORS(app, origins=["https://jaiminchandaranaportfolio.vercel.app"])

@app.route("/consultation", methods=["POST", "OPTIONS"])
def consultation():
    if request.method == "OPTIONS":
        return jsonify({"status": "OK"}), 200

    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    company = data.get("company")
    phone = data.get("phone")
    service = data.get("service")
    message = data.get("message")
    budget = data.get("budget")
    timeline = data.get("timeline")
    discription = data.get("discription")

    sender_email = "24mcajai005@ldce.ac.in"
    yag = yagmail.SMTP(user=sender_email, password=app_password)

    try:
        contents = [
            f"""
            <strong>Name</strong>: {name}<br>
            <strong>Email</strong>: {email}<br>
            <strong>company</strong>: {company}<br>
            <strong>Phone</strong>: {phone}<br>
            <strong>Service</strong>: {service}<br>
            <strong>Message</strong>: {message}<br>
            <strong>Budget</strong>: {budget}<br>
            <strong>Timeline</strong>: {timeline}<br>
            <strong>Discription</strong>: {discription}
            """
        ]
        yag.send(
            to="chandaranajaimin@gmail.com",
            subject="Inquiry For Consultation.",
            contents=contents
        )
        return jsonify({"success": True, "message": "Consulatation sent successfully."})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500
    
    
@app.route("/career", methods=["POST", "OPTIONS"])
def consultation():
    if request.method == "OPTIONS":
        return jsonify({"status": "OK"}), 200
    
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    experience = data.get("experience")
    portfolio = data.get("portfolio")
    resume = data.get("resume")
    coverLetter = data.get("coverLetter")
    availability = data.get("availability")
    expectedSalary = data.get("expectedSalary")

    sender_email = "24mcajai005@ldce.ac.in"
    yag = yagmail.SMTP(user=sender_email, password=app_password)

    try:
        contents = [
            f"""
            <strong>Name</strong>: {name}<br>
            <strong>Email</strong>: {email}<br>
            <strong>Phone</strong>: {phone}<br>
            <strong>experience</strong>: {experience}<br>
            <strong>Portfolio</strong>: {portfolio}<br>
            <strong>Resume</strong>: {resume}<br>
            <strong>Cover letter</strong>: {coverLetter}<br>
            <strong>Availability</strong>: {availability}<br>
            <strong>Expected salary</strong>: {expectedSalary}
            """
        ]
        yag.send(
            to="chandaranajaimin@gmail.com",
            subject="Inquiry For Consultation.",
            contents=contents
        )
        return jsonify({"success": True, "message": "Consulatation sent successfully."})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
