album.controller('UserController', UserController);

function UserController($scope, $interval) {
    $scope.user = {
        name: 'Karthik'
        , fullName: 'Chejerla Karthik'
    };
    $scope.updateTime = function () {
        $scope.time = new Date();
    }
    $interval(function () {
        $scope.updateTime();
    }, 1000);
}
