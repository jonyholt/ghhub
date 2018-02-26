"use strict";

// CONTACT MAP

var PageModals = function() {

	var _init = function() {
		$('#exampleModal2').on('show.bs.modal', function (event) {
		  	var button = $(event.relatedTarget) // Button that triggered the modal
		  	var recipient = button.data('whatever') // Extract info from data-* attributes
		  	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		  	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		  	var modal = $(this)
		  	modal.find('.modal-title').text('New message to ' + recipient)
		  	modal.find('.modal-body input').val(recipient)
		});
	}

    return {

			User = new Schema({
'email': { type: String, validate: [validatePresenceOf, 'an email is required'], index: { unique: true } },
'hashed_password': String,
'salt': String
});

User.virtual('id')
.get(function() {
return this._id.toHexString();
});

User.virtual('password')
.set(function(password) {
this._password = password;
this.salt = this.makeSalt();
this.hashed_password = this.encryptPassword(password);
})
.get(function() { return this._password; });

User.method('authenticate', function(plainText) {
return this.encryptPassword(plainText) === this.hashed_password;
});

User.method('makeSalt', function() {
return Math.round((new Date().valueOf() * Math.random())) + '';
});

User.method('encryptPassword', function(password) {
return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
});

User.pre('save', function(next) {
if (!validatePresenceOf(this.password)) {
next(new Error('Invalid password'));
} else {
next();
}
});

        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageModals.init();
});
