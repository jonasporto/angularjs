function TesteCtrl($scope,$http,$window){

	var $ = jQuery;

	$scope.salvar = function(){

		if($scope.unidade.id>0){
			
			$.ajax({
				type: 'put',
				url: 'service/produtos',
				data: $scope.unidade,
				success:function(data){
					$window.console.log(data);
				}

			});


		}else{

		$http.post('service/produtos',$scope.unidade).success(function(data){
			$scope.lista.unshift(data);
			reset();
		});

	}
	};

	$scope.editar = function(unidade){
		$scope.unidade = unidade;



	};



	$scope.excluir = function(unidade){
		var confirm = $window.confirm('Tem certeza que deseja excluir o produto' + unidade.title + '?');
		if(confirm){
			$http.delete('service/produtos/' + unidade.id).success(function(data){
				var index = $scope.lista.indexOf(unidade);
				$scope.lista.splice(index,1);


			});
		}
	

	};


	var reset = function(){
		$scope.unidade = {id:0,category:'',title:'',google_id:''};

	};


	var init = function(){
		$http.get('service/produtos').success(function(data){
			$scope.lista = data;
		});
			reset();
						
	};

	init();

}