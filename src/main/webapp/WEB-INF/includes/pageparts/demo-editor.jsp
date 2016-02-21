<%--
    Document   : demo-editor
    Created on : 3-aug-2015, 19:51:22
    Author     : Michel
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/includes/include.jsp"%>


<shiro:notAuthenticated>
    <div class="modal fade" id="project-demo-function-dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><fmt:message key="editor.demo.dialog.title" /></h4>
                </div>
                <div class="modal-body"  style="height: 200px;">
                    <div class="col-md-6">
                        <h2><fmt:message key="editor.demo.dialog.continue" /></h2>
                        <p><fmt:message key="editor.demo.dialog.continue.text" /></p>
                        <button type="button" class="btn btn-default" data-dismiss="modal"><fmt:message key="editor.demo.dialog.continue.continuelink" /></button>
                    </div>
                    <div class="col-md-6">
                        <h2><fmt:message key="editor.demo.dialog.login" /></h2>
                        <a class="full-editor-link" href="<url:getUrl url="/login.jsp"/>"><fmt:message key="editor.demo.dialog.login.loginlink" /></a>
                        <a href="<url:getUrl url="register"/>" ><fmt:message key="editor.demo.dialog.login.registerlink" /></a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"><fmt:message key="cancel" /></button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <script>
        $("a.demo-function").click(function (event) {
            event.preventDefault();
            $("a.full-editor-link").attr("href", window.location.href.replace("demo", "editor"));
            $("#project-demo-function-dialog").modal('show');
        });
    </script>
</shiro:notAuthenticated>

<shiro:authenticated>
    <div class="modal fade" id="project-demo-function-dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">You are logged in</h4>
                </div>
                <div class="modal-body"  >
                    <p>Compiling and saving is disabled</p>
                    <p>Are you sure you want to continue using this demo version</p>
                    <a class="full-editor-link" href="/">Full editor</a>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <script>
        $("a.demo-function").click(function (event) {
            event.preventDefault();
            $("a.full-editor-link").attr("href", window.location.href.replace("demo", "editor"));
            $("#project-demo-function-dialog").modal('show');
        });
    </script>
</shiro:authenticated>