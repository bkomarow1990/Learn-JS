let car = {
    producer: "Tesla",
    model: "X",
    year: 2020,
    avg_speed: 120,
    printInfo(){
        console.log(`${this.producer}, ${this.model}, Year: ${this.year}, Average Speed: ${this.avg_speed}`);
    }
}
car.printInfo();