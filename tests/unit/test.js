describe('NotificationsController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  beforeEach(function() {
    this.$scope = {};
    this.controller = $controller('NotificationsController', { $scope: this.$scope });
    this.$scope.message = 'Some message';
  });

  describe('$scope.success', function() {
    it('displays message', function() {
      spyOn(toastr, 'success');

      this.$scope.success();
      expect(toastr.success).toHaveBeenCalledWith('Some message');
    });

    it('resets message', function() {
      this.$scope.success();
      expect(this.$scope.message).toEqual('');
    });
  });

  describe('$scope.error', function() {
    it('displays message', function() {
      spyOn(toastr, 'error');

      this.$scope.error();
      expect(toastr.error).toHaveBeenCalledWith('Some message');
    });

    it('resets message', function() {
      this.$scope.error();
      expect(this.$scope.message).toEqual('');
    });
  });

  describe('$scope.info', function() {
    it('displays message', function() {
      spyOn(toastr, 'info');

      this.$scope.info();
      expect(toastr.info).toHaveBeenCalledWith('Some message');
    });

    it('resets message', function() {
      this.$scope.info();
      expect(this.$scope.message).toEqual('');
    });
  });

  describe('$scope.warning', function() {
    it('displays message', function() {
      spyOn(toastr, 'warning');

      this.$scope.warning();
      expect(toastr.warning).toHaveBeenCalledWith('Some message');
    });

    it('resets message', function() {
      this.$scope.warning();
      expect(this.$scope.message).toEqual('');
    });
  });
});
