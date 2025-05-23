interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks."
    }
}

//treacher class

class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  