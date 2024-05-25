
# 3 maneiras de criar e atribuir função a um evento

## 1ª forma:

  ```javascript
    form.onsubmit = function() {}
  ```

# 2ª forma:

  ```javascript
    form.onsubmit = () => {}
  ```

## 3ª forma:

  ```javascript
    form.onsubmit = handleSubmit

    function handleSubmit() {}
  ```
