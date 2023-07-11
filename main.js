//write your code here to make the tests pass
class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}

class Employee {
    constructor(name) {
        this.name = name
    }

    work(office) {
        for (let i = 0; i <= 9; i++) {
            office.documents.push(new Document(this.name))
        }
    }
}

class Manager {
    constructor(name) {
        this.employees = []
        this.name = name
    }

    hireEmployee(name) {
        const employee = new Employee(name)
        this.employees.push(employee)
    }

    askEmployeesToWork(office) {
        this.employees.forEach(impl => impl.work(office))
    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }

    clean() {
        console.log("Clean")
    }
}

class Office {
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name) {
        const newCleaner = new Cleaner(name)
        this.cleaners.push(newCleaner)
    }

    hireManager(name) {
        const newManager = new Manager(name)
        this.managers.push(newManager)
    }

    startWorkDay() {
        this.managers.forEach(man => man.askEmployeesToWork(this))
        this.cleaners.forEach(clen => clen.clean())
    }
}