<%@page contentType="text/html;charset=utf-8" %>
<%@page import="java.io.*"%>
<%
  request.setCharacterEncoding("utf-8");
  String data = request.getParameter("data");
  
  String filePath = "C:/apache-tomcat-6.0.35/webapps/git/sphere.json";
  try{
  File f = new File(filePath);
  f.createNewFile();

  FileWriter fw = new FileWriter(filePath);
  fw.write(data);
  fw.close();
  }catch (IOException e) {
    System.out.println(e.toString());
  }

%>