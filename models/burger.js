/**
 * Created by ryanrodwell on 5/17/17.
 */
module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false
    });
    return Burger;
};
