package org.collectiveone.modules.model.repositories;

import java.util.List;
import java.util.UUID;

import org.collectiveone.modules.model.ModelCardWrapper;
import org.collectiveone.modules.model.ModelSection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ModelCardWrapperRepositoryIf extends CrudRepository<ModelCardWrapper, UUID> {
	
	public ModelCardWrapper findById(UUID modelCardWrapperId);

	@Query("SELECT section from ModelSection section JOIN section.cardsWrappers crds WHERE crds.id = ?1")
	public List<ModelSection> findParentSections(UUID modelCardWrapperId);
	
	@Query("SELECT crdWrp from ModelCardWrapper crdWrp JOIN crdWrp.card crd "
			+ "WHERE (LOWER(crd.title) LIKE ?1 OR LOWER(crd.text) LIKE ?1) "
			+ "AND crdWrp.initiative.id IN ?2")
	public Page<ModelCardWrapper> searchBy(String query, List<UUID> initiativeIds, Pageable page);
}
