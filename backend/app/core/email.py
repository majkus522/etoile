import resend
from dotenv import load_dotenv
import os

load_dotenv()
resend.api_key = os.getenv("RESEND_API_KEY")

def send_mail(email: str, subject: str, content: str):
    r = resend.Emails.send({
    "from": "shop@etoile.net.pl",
    "to": email,
    "subject": subject,
    "html": content
    })