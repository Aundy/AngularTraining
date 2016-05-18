angular.module('DemoApp').factory('employeeFactory', function() {
  var empList = [{
      id: 1,
      fName: 'John',
      role: 'Softwate Engineer',
      project: {
        name: "Test",
        location: "chn"
      }
    }, {
      id: 2,
      fName: 'Mark',
      role: 'PM',
      project: {
        name: "Test",
        location: "chn"
      }
    }, {
      id: 3,
      fName: 'Bill',
      role: 'QA',
      project: {
        name: "Test",
        location: "chn"
      }
    }]; 
  return {
    sharedProfile: {
      id: "99999",
      fName: "x",
      role: "y",
      project: {
        name: "t",
        location: "z"
      }
    },
    employees: empList,
    getEmployeeById(id){
      emp = getItemById(empList, id);
    },
    addEmployee(e){
      var exists = false;
      for (var i = 0; i < empList.length; i++) {
        console.log(empList[i].fName.toLowerCase());
        if(empList[i].fName.toLowerCase() === e.fName.toLowerCase()){
          console.log('User exists');
          alert("User exists");
          exists = true;
          return;
        }
      }
      if(!exists){
        console.log('User not exists');
        empList.push(e);
        return true;
      }

      return false;
    },
    deleteEmployee(e){
      var index = empList.indexOf(e);
      empList.splice(index, 1);
    },
    seeProfile(e){

    },
    updateProfile(e){
      for (var i = 0; i < empList.length; i++) {
        if (empList[i].id === e.id) {
            empList[i].fName = e.fName;
            empList[i].role = e.role;
            empList[i].project = e.project;
            return true;
        }
      }
      return false;
    },
    updateSharedProfile(newEmp) {
      this.sharedProfile.id = newEmp.id;
      this.sharedProfile.fName = newEmp.fName;
      this.sharedProfile.role = newEmp.role;
      this.sharedProfile.project = newEmp.project;
    }
  };

  function getItemById(anArray, id) {
    for (var i = 0; i < anArray.length; i += 1) {
        if (anArray[i].id === id) {
            return anArray[i];
        }
    }
}
});