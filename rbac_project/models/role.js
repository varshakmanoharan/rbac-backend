const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['admin', 'user', 'moderator'],
  },
  permissions: [{
    type: String, // Define permissions like 'create', 'read', 'update', 'delete'
  }]
});

module.exports = mongoose.model('Role', RoleSchema);
