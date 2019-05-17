 const JwtStrategy = require('passport-jwt').Strategy
 const ExtractJwt = require('passport-jwt').ExtractJwt
 const mongoose = require('mongoose')
 const Admin = require('../models/Admin')
 const tokenKey = require('./keys').secretOrKey

 let opts = {};
 opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
 opts.secretOrKey = tokenKey

 module.exports = passport => {
     passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
        const currentAdmin = await Admin.findById(jwtPayload.id)
        if(currentAdmin) return done(null,currentAdmin)
        return done(null,false)
     }))
 }