angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var members=[
        {name:'Smita',tel:9945828789,email:"smita@gmail.com",address:"RR Nagar",vehicle_number:'KA052345'},
        {name:'Abhi',tel:8845696325,email:"abhi@gmail.com",address:"Basavangudi",vehicle_number:'KA057689'},
        {name:'Vijay',tel:7339467857,email:"vijay@gmail.com",address:"JP Nagar",vehicle_number:'KA053486'},
        {name:'Amal',tel:8845696325,email:"amal@gmail.com",address:"East End",vehicle_number:'KA052098'}
    ];
    console.log(members);
    $scope.members=members;
    $scope.rowlimit=4;
});