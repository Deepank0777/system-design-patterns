interface ISolutionStrategy{
    implementSolution():void;
}

class Solver{
    solutionStrategy:ISolutionStrategy

    constructor(strategy:ISolutionStrategy){
        this.solutionStrategy = strategy;
    }

    implementSolution(){
        this.solutionStrategy.implementSolution();
    }
}

class SpecialSolution implements ISolutionStrategy{
    implementSolution(){
        console.log('some special solution');
    }
}

class SpecialSolutionPro implements ISolutionStrategy{
    implementSolution(){
        console.log('some special pro solution');
    }
}

class Problem extends Solver{
    problem:string

    constructor(strategy:ISolutionStrategy){
        super(strategy)
        this.problem = ''
    }
    
    defineProblem(problem:string){
        this.problem = problem
    }

    findSolution(){
        if(!this.problem.length) throw new Error('problem is not defined')

        this.implementSolution();
    }

}

class Main{
    public static run():void{
        const problme:Problem = new Problem(new SpecialSolutionPro());

        problme.defineProblem('problem-type-1');
        problme.findSolution();
    }
}

Main.run();


