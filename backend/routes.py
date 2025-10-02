from flask import Blueprint
from controller import (
    save_sabza_fran_contact, save_eco_contact, save_swap_contact, save_demo_contact, save_enterprise_contact)

contact_bp = Blueprint('contact', __name__, url_prefix='/api/contact')

@contact_bp.route('/sabza_fran', methods=['POST'])
def save_to_db_sabza():
    return save_sabza_fran_contact()


@contact_bp.route('/ecoledger', methods=['POST'])
def save_to_db_eco():
    return save_eco_contact()

@contact_bp.route('/token_swapping', methods=['POST'])
def save_to_db_swap():
    return save_swap_contact()

@contact_bp.route('/tokenx_demo', methods=['POST'])
def save_to_db_demo():
    return save_demo_contact()


@contact_bp.route('/tokenx_enterprise', methods=['POST'])
def save_to_db_enterprise():
    return save_enterprise_contact()