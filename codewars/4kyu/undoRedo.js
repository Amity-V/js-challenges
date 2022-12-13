// Link: https://www.codewars.com/kata/undo-slash-redo

/*

The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be
performed on the object passed as a parameter:

    set(key, value) Assigns the value to the key. If the key does not exist, creates it.
    get(key) Returns the value associated to the key.
    del(key) removes the key from the object.
    undo() Undo the last operation (set or del) on the object. Throws an exception if there
        is no operation to undo.
    redo() Redo the last undo operation (redo is only possible after an undo). Throws an
        exception if there is no operation to redo.
    After set() or del() are called, there is nothing to redo.
    All actions must affect to the object passed to undoRedo(object) function. So you can
        not work with a copy of the object.
    Any set/del after an undo should disallow new redos.

*/

function undoRedo(object) {
  let actionsHistory = [];
  let undoneHistory = [];

  return {
    set(key, value) {
      if (object.hasOwnProperty(key)) {
        actionsHistory.push({
          type: "edit",
          key,
          value: object[key],
          editedValue: value,
        });
      } else {
        actionsHistory.push({
          type: "set",
          key,
          value,
        });
      }

      object[key] = value;
      undoneHistory = [];
    },
    get(key) {
      return object[key];
    },
    del(key) {
      if (object[key]) {
        actionsHistory.push({
          type: "delete",
          key,
          value: object[key],
        });

        delete object[key];
      }

      undoneHistory = [];
    },
    undo() {
      if (actionsHistory.length < 1) {
        throw new Error("There is no operation to undo");
      }

      const lastAction = actionsHistory.pop();
      const { type, key, value } = lastAction;

      switch (type) {
        case "set":
          delete object[key];
          break;

        case "edit":
          object[key] = value;
          break;

        case "delete":
          object[key] = value;
          break;
      }

      undoneHistory.push(lastAction);
    },
    redo() {
      if (undoneHistory.length < 1) {
        throw new Error("There is no operation to redo");
      }

      const lastAction = undoneHistory.pop();
      const { type, key, value, editedValue } = lastAction;

      switch (type) {
        case "set":
          object[key] = value;
          break;

        case "edit":
          object[key] = editedValue;
          break;

        case "delete":
          delete object[key];
          break;
      }

      actionsHistory.push(lastAction);
    },
  };
}

/* Top 3 solutions: (sorted by best practices)

===

function undoRedo(obj) {
	var commands = []
	var index = -1
	
	function add(cmd) {
		commands.splice(index + 1, commands.length - index)
		commands.push(cmd)
		index = commands.length - 1
	}
	
	return {
		get: function(key) {
			return obj[key]
		},
		set: function(key, value) {
			var prev = obj[key]
			var cmd = {
				exec: function() { obj[key] = value },
				undo: function() { obj[key] = prev }
			}
			
			add(cmd)
			cmd.exec()
		},
		del: function(key) {
			var prev = obj[key]
			var cmd = {
				exec: function() { delete obj[key] },
				undo: function() { obj[key] = prev }
			}
			
			add(cmd)
			cmd.exec()
		},
		undo: function() {
			var cmd = commands[index]
			if (cmd === void 0) throw new Error()
			
			cmd.undo()
			index--
		},
		redo: function() {
			var cmd = commands[index + 1]
			if (cmd === void 0) throw new Error()
			
			cmd.exec()
			index++
		}
	}
}

===

function undoRedo(obj) {
  var u = [], r = [];
  
  function set(k, v) {
    r = [], u.push(k in obj ? [k, obj[k]] : [k]);
    if (arguments.length > 1) obj[k] = v;
    else delete obj[k];
  }
  function undo(u, r, a) {
    if (a = u.pop()) {
      r.push(a[0] in obj ? [a[0], obj[a[0]]] : [a[0]]);
      if (a.length == 1) delete obj[a[0]];
      else obj[a[0]] = a[1];
    }
    return a;
  }
  
	return {
		set: function(k, v) { set(k, v); },
		get: function(k) { return obj[k]; },
		del: function(k) { set(k); },
		undo: function() { if (!undo(u, r)) throw "Nothing to undo"; },
		redo: function() { if (!undo(r, u)) throw "Nothing to redo"; }
	};
}

===

function undoRedo(object) {
  var undoArgs = [], redoArgs = [];
	return {
		set(key, value) {
      undoArgs.push([key, object[key]]);
      redoArgs = [];
      object[key] = value; },
		get(key) { return object[key]; },
		del(key) { 
      undoArgs.push([key, object[key]]);
      redoArgs = [];
      delete object[key]; },
		undo() {
      if (undoArgs.length == 0) throw "Can't undo!";
      var undoOp = undoArgs.pop();
      redoArgs.push([undoOp[0], object[undoOp[0]]]);
      object[undoOp[0]] = undoOp[1]; },
		redo() {
      if (redoArgs.length == 0) throw "Can't redo!";
      var redoOp = redoArgs.pop();
      undoArgs.push([redoOp[0], object[redoOp[0]]]);
      if (redoOp[1] !== undefined) object[redoOp[0]] = redoOp[1];
      else delete object[redoOp[0]]; }
	};
}

*/
