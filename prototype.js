const vehicle = {
    drive: function() {
        console.log("the car is driving");
    }
};

const car = {
    make: "Toyota"
};

Object.setPrototypeOf(car, vehicle);
car.drive();
