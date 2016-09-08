describe('test toastr messages', function() {
  function getAlert(type) {
    return element(by.css('.toast-' + type));
  }

  function getButton(type) {
    return element(by.css('.btn-' + type));
  }

  function testAlert(type, message) {
    browser.wait(function() {
      return getAlert(type).getText();
    }, 1000);

    expect(getAlert(type).getText()).toEqual(message);
  }

  function testEnabling(element, callback) {
    expect(element.isEnabled()).toBe(false);
    callback();
    expect(element.isEnabled()).toBe(true);
  }

  function testFieldEmptied() {
    element(by.model('message')).getAttribute('value').then(function (value) {
      expect(value).toEqual('');
    });
  }

  function type(message) {
    element(by.model('message')).sendKeys(message);
  }

  beforeEach(function() {
    browser.get('/');
  });

  it('should show success message on click', function() {
    var successBtn = getButton('success');

    testEnabling(successBtn, function() {
      type('Some message');
    })

    successBtn.click()
    testAlert('success', 'Some message');
    testFieldEmptied();
  });

  it('should show error message on click', function() {
    var errorBtn = getButton('danger');

    testEnabling(errorBtn, function() {
      type('Some message');
    })

    errorBtn.click()
    testAlert('error', 'Some message');
    testFieldEmptied();
  });

  it('should show warning message on click', function() {
    var warningBtn = getButton('warning');

    testEnabling(warningBtn, function() {
      type('Some message');
    })

    warningBtn.click()
    testAlert('warning', 'Some message');
    testFieldEmptied();
  });

  it('should show info message on click', function() {
    var infoBtn = getButton('info');

    testEnabling(infoBtn, function() {
      type('Some message');
    })

    infoBtn.click()
    testAlert('info', 'Some message');
    testFieldEmptied();
  });
});
