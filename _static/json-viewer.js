document.addEventListener("DOMContentLoaded", function() {
    var json = {
        "name": "Árbol Binario",
        "root": {
            "value": 8,
            "left": { "value": 3, "left": { "value": 1 }, "right": { "value": 6 } },
            "right": { "value": 10, "right": { "value": 14 } }
        }
    };

    function syntaxHighlight(json) {
        if (typeof json != "string") {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
            var cls = "number";
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = "key";
                } else {
                    cls = "string";
                }
            } else if (/true|false/.test(match)) {
                cls = "boolean";
            } else if (/null/.test(match)) {
                cls = "null";
            }
            return '<span class="' + cls + '">' + match + "</span>";
        });
    }

    var jsonContainer = document.getElementById("json");
    jsonContainer.innerHTML = "<pre>" + syntaxHighlight(json) + "</pre>";
});
