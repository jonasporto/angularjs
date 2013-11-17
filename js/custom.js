function TesteCtrl($scope,$http,$window){

	var $ = jQuery;

	$scope.salvar = function(){


		$http.post('service/produtos',$scope.unidade).success(function(data){
			$window.console.log(data);

		});

		/*
		$http.get('/service/produtos').success(function(data){
			$windows.console.log
		});
		*/
	}


	var init = function(){
		$scope.unidade = {id:0,category:'',title:'',google_id:''};
		$scope.lista = [];
	};

	init();

}