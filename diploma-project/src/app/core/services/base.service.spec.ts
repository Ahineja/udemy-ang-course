import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BaseService } from "./base.service";
import { environment } from "../../../environments/environment";

interface TestModel {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

class TestService extends BaseService<TestModel> {
  constructor(http: any) {
    super(http, "test");
  }
}

describe("BaseService", () => {
  let service: TestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService]
    });

    service = TestBed.inject(TestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get all items", () => {
    const mockResponse = {
      data: [{ id: "1", name: "Test Item" }],
      total: 1,
      page: 1,
      limit: 10,
      totalPages: 1
    };

    service.getAll().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/test`);
    expect(req.request.method).toBe("GET");
    req.flush(mockResponse);
  });

  it("should get item by id", () => {
    const mockItem = { id: "1", name: "Test Item" };

    service.getById("1").subscribe(item => {
      expect(item).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/test/1`);
    expect(req.request.method).toBe("GET");
    req.flush(mockItem);
  });
});
